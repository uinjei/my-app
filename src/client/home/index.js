export default {
    extends: 'div',
    oninit() {
        this.setAttribute('class', 'container');
    },
    render() {
      this.html`
        <div class="content">
            <h3>My official Github pages mo to.</h3>
            <p>
              Lorem ipsum dolor
            </p>
        </div>
      `;
    }
  }