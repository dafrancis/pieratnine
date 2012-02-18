require 'sinatra/base'
require 'ostruct'
require 'time'
require 'yaml'

class Blog < Sinatra::Base
  set :root, File.expand_path('../../', __FILE__)
  set :articles, []
  set :app_file, __FILE__
  set :haml, { :ugly=>true }

  Dir.glob "#{root}/articles/*.md" do |file|
    meta, content = File.read(file).split("\n\n", 2)
    article = OpenStruct.new YAML::load(meta)
    article.date = Time.parse article.date.to_s
    article.content = content
    article.slug = File.basename(file, '.md')

    get "/#{article.slug}" do
      haml :post, :locals => { :article => article }
    end

    articles << article
  end

  articles.sort_by! {|article| article.date}
  articles.reverse!

  get '/' do
    haml :index
  end
end