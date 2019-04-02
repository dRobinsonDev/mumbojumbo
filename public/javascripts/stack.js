function Stack() {
    let items = [];
    this.push = element => items.push(element);
    this.pop = () => items.pop();
    this.isEmpty = () => items.length === 0;
    this.clear = () => items = [];
    this.size = () => items.length;
}
