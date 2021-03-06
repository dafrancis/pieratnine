require 'sinatra/base'

class BixApp < Sinatra::Base
  set :root, File.expand_path('../../', __FILE__)
  set :views, root + '/views/bix'

  URL_ROOT = '/bix'

  def render_erb(template, options={})
    erb(template, options.merge(:layout => !request.xhr?))
  end

  get '/' do
    redirect URL_ROOT + params[:"_escaped_fragment_"] if params[:"_escaped_fragment_"]
    render_erb :home
  end

  get '/how_to' do
    render_erb :how_to
  end

  get '/download' do
    render_erb :download
  end
end
