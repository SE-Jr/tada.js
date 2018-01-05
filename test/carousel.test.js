chai.should();

describe("Carousel Test", ()=>{
  it("아무것도 안하니까 true여야 한다.", ()=>{
    //given
    const isNothing = true;
    //when
    //then
    isNothing.should.be.true;
  });
});
