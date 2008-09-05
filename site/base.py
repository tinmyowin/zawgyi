# Gobal variables

# Change the value of HOST_NAME to the name given to point to your app.
HOST_NAME = 'zawgyi-dev1.appspot.com'

import os
from google.appengine.api import users
from google.appengine.ext import webapp
from google.appengine.ext import db
from google.appengine.ext.webapp import template

class WebUtil:
  """Utilities for web application"""
  
  def render(content_html, uri, template_values):
    """All rendering come here"""
    
    current_user = users.GetCurrentUser()
    
    signInOut = ''
    if current_user:
      signInOut = '<a href="%s">Sign Out</a>' % (
          users.CreateLogoutURL(uri))
      template_values['base_welcome'] = current_user.nickname() + " "
    else:
      signInOut = '<a href="%s">Sign In</a>' % (
          users.CreateLoginURL(uri))
      
    template_values['base_signInOut'] = signInOut;
      
    path = os.path.join(os.path.dirname(__file__), content_html)
    return template.render(path, template_values)
  
  render = staticmethod(render)

