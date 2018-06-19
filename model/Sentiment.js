Sentiment = function(json) {
    this.createdAt = json["created_at"];
    this.id = json["id_str"];
    this.text = json["text"];
    this.platformId = "iPhone";
    this.sentimentMagnitude = 0.7;
    this.entimentScore = -0.8;
    this.url = "www.dtvnow.com";
    this.postData = {
        createdAt: this.createdAt,
        id: this.id,
        text: this.text,
        platformId: this.platformId,
        sentimentMagnitude: this.sentimentMagnitude,
        entimentScore: this.entimentScore,
        url: this.url
    };
    this.state = function(){
        return "negative";
    }
};
module.exports = Sentiment;
