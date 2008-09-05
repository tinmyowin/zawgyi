import wsgiref.handlers
import os
import random
import cgi
from google.appengine.ext import webapp
from google.appengine.ext import db
from google.appengine.ext.webapp import template
from google.appengine.api import users
from google.appengine.ext import webapp
from google.appengine.api import urlfetch
import urllib # Used to unescape URL parameters.
import gdata.service
import gdata.urlfetch
import atom
from feedfetcher import *
from base import *


class Bloggers(db.Model):
  name = db.StringProperty()
  google_id = db.StringProperty()
  url = db.StringProperty()
  logo = db.StringProperty()


class MainPage(webapp.RequestHandler):
  """Main page"""

    
  def get(self):
    bloggers = Bloggers.all()

    
    template_values = {
      'startup2': 'test',
      }

    
    self.response.out.write(WebUtil.render('index.html', self.request.uri, template_values))


def main():
  application = webapp.WSGIApplication(
    [('/', MainPage)],
    debug=True)
  wsgiref.handlers.CGIHandler().run(application)

if __name__ == "__main__":
  main()