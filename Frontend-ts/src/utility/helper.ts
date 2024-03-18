class Helper {
  private post: string = ""
  private tags: string[] = []
  private temp_post: string = ""
  private tag_pattern: RegExp = /#\w+/g

  constructor() {}

  //   convert string to hashtags link
  public convertHashTags(post: string): string {
    this.post = post
    this.tags = post.match(this.tag_pattern) || []
    this.tags.forEach((t) => {
      if (this.temp_post.length === 0) {
        this.temp_post = this.post.replace(t, `<a href="http://localhost:5173/${t}">${t}</a>`)
      } else {
        this.temp_post = this.temp_post.replace(t, `<a href="http://localhost:5173/${t}">${t}</a>`)
      }
    })

    return this.temp_post
  }
}

export default Helper
