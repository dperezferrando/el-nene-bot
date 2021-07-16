
class SimpleText {
  constructor(text) {
    this.text = text;
  }

  get(client, channel) {
    return this.text;
  }

}

module.exports = SimpleText;