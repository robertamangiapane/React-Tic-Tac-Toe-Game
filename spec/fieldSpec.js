describe("Field", function(){

  beforeEach(function(){
    field = new Field()
  })

  describe("field_status", function(){
    it("return available field if not already taken", function(){
      field.availability = "empty"

      expect(field.status()).toEqual("empty")
    })

    it("return not available field if already taken", function(){
      field.availability = "taken"

      expect(field.status()).toEqual("taken")
    })
  })

})
