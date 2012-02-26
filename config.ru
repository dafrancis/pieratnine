$LOAD_PATH.unshift 'lib'

require 'blog'
require 'bix'
map "/" do
  run Blog
end

map "/bix" do
  run BixApp
end
