class Chatwork
  include ActiveModel::Model
  require 'net/https'
  require 'uri'
  require 'json'

  class << self
    def post_message(channel_id, massage)
      uri = base_uri(channel_id)    
      http = get_http(uri)
  
      request = http.start do
        req = Net::HTTP::Post.new(uri.path)
        req['X-ChatWorkToken'] = ENV['CHATWORK_API_KEY']
        req.set_form_data(body: massage)
        http.request(req)
      end
      request.inspect
    end

    private

    def get_http(uri)
      http = Net::HTTP.new(uri.host, uri.port)
      http.use_ssl = true
      http.verify_mode = OpenSSL::SSL::VERIFY_NONE
      http
    end

    def base_uri(chatwork_id)
      URI.parse("https://api.chatwork.com/v2/rooms/#{chatwork_id}/messages")
    end
  end
end 