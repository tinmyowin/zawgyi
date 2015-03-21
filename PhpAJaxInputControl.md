# Introduction #

Represents a control that can be used to display or edit unformatted text in three input modes suitable for Burmese script. The keystroke conversion mode are control by `BurglishMode`.

# Description #

Basically this control attach javascript file to textarea of HTML input control.

## Control Properties ##
`BurglishMode` control keystroke conversion mode. `BurglishMode` property enumeration has the following three modes
  * `None` - The input control beheave like normal textarea.
  * `Typewriter` - keystroke is converted according to usual typewrite keyboard layout.
  * `Phonetic` (default) - phonetically convert to Myanmar character from romanized input.

_Command key binding_: By default `BurglishMode` is bind to F8 key. Pressing F8 will change `BurglishMode` one after another.



# Usage example #

```
<?php
$input1 = new BurmeseInput();
$input1->BurglishMode = 'Typewriter';

echo $input1->show();
?>
```

## Styling Support ##
The input control can be decorated using CSS styling

# Require file #
  1. [binput.php](http://code.google.com/p/zawgyi/source/browse/trunk/zawgyi/php/binput.php)

## System requirement for web server ##
  * PHP 5.0 and above

## System requirement for client ##
  * Javascript enable browser. (See also AboutAjax)

## Authors ##
  1. Ei Maung: Design, coding, testing
  1. Kyaw Tun: Design, documentation, testing