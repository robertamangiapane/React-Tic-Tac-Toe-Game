describe("Test", function(){

  beforeEach(function(){
    this_test = new Test()
  })

  it("return test", function(){
    expect(this_test.test()).toEqual ("test")
  })
})
