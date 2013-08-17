# Landing Page

This is a simple static page that displays a countdown timer indicating how long it will be until your site comes back from maintenance. It is all static HTML/CSS/JS.

To set the return time, simply change the values for tyear, tmonth, etc in clock.js. Note that month must be in Javascript's date format (January = 00, February = 01, etc.).

Change the company name in the footer to your website's name.

---

## Caveats

*	This currently has a maximum value of 24 hours. You can tweak the `data-max` value of the hours input in index.html to change this.

---

## Credits

Uses Bootstrap and jQuery. All credit to [aterrien](https://github.com/aterrien/jQuery-Knob) for the excellent jQuery-Knob Javascript.

---

## License

Copyright 2013 John Heenan

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.