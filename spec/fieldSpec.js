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

  describe("claim_field", function(){
    it("set a field as taken", function(){
      field.availability = "empty"

      expect(field.claim()).toEqual("taken")
    })

    it("throw an error if the field is already taken", function(){
      field.availability = "taken"
      
      expect(function(){field.claim()}).toThrow('Field already taken')
    })
  })
})
