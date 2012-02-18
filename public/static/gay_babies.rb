<pre><code>
require 'uri'
require 'open-uri'

class GayBabies
  def self.check_url(key, url)
    open("https://sb-ssl.google.com/safebrowsing/api/lookup?
          client=demo-app&apikey=#{key}&appver=1.5.2&pver=3.0
          &url=#{URI.escape(url)}").read
  end
end
</code></pre>
