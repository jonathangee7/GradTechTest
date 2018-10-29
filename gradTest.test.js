function createMenuData(data) {
	var parents = [];
	var answer = [];
	for(i=0;i<data.length;i++){
	if(data[i].includes("/")){
		var slash = data[i].indexOf("/");
	if(!(parents.includes(data[i].slice(0,slash)))){
		parents.push(data[i].slice(0,slash));
	}
	
	}
	}
	
	for(j=0;j<parents.length;j++){
		var parent = {title:parents[j]};
		var childlist = [];
	for(k=0;k<data.length;k++){
	if(data[k].includes(parents[j]+"/")){
		var stringlength = data[k].length;
		childlist.push(data[k].slice((slash+1),stringlength));
	}
	}
		parent.data = childlist;
		answer.push(parent);
	}
	return answer;
}

describe("menu Data Generator", () => {
    it("creates correct data structure ", () => {
      const data = [
        "parent1/parent1child",
        "parent1/parent1child2",
        "parent2/parent2child",
        "parent2/parent2child2",
        "parent1/parent1child3",
        "parent3",
        "parent3/parent3child1",
        "parent4"
      ];
  
      const expectedResult = [
        {
          title: "parent1",
          data: ["parent1child", "parent1child2", "parent1child3"]
        },
        { title: "parent2", data: ["parent2child", "parent2child2"] },
        { title: "parent3", data: ["parent3child1"] }
      ];
  
      const actualResult = createMenuData(data);
      expect(actualResult).toMatchObject(expectedResult);
    });
  });
