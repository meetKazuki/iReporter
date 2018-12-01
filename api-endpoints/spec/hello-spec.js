describe('Hello World Suite', function() {
  it ("checks if text is 'Hello World'", function(done) {
    let text = 'Hello World';
    expect(text).toBe('Hello World');
    done();
  });
  it ("checks if another text is 'Hello World'", function(done) {
    let text = "Hello World";
    expect(text).toBe('Hello World');
    done();
  });
});
