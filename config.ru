require File.join(File.dirname(__FILE__), 'lib', 'haze')

Haze.set :title,  "pier at nine"
Haze.set :author, "Afal"
Haze.set :domain, "http://pieratnine.com/"
# Replace KEY by a sha1sum of something
Haze.set :key,    "DICKS_IN_MY_BUTT"

Haze.reload!

run Haze::App
