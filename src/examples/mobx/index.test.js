const index = require("./index")

// @ponicode
describe("handleClick", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Anas", "Anas", "Jean-Philippe"], ["Jean-Philippe", "Michael", "Jean-Philippe"], ["Pierre Edouard", "Anas", "Michael"]]
        inst = new index.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleClick()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleUpdateData", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Jean-Philippe", "Edmond", "Edmond"], ["Jean-Philippe", "Pierre Edouard", "Jean-Philippe"], ["Anas", "George", "Anas"]]
        inst = new index.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleUpdateData()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleUpdateMapData", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Michael", "Michael"], ["Pierre Edouard", "Jean-Philippe", "George"], ["Jean-Philippe", "Pierre Edouard", "Jean-Philippe"]]
        inst = new index.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.handleUpdateMapData()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Michael", "Michael", "Edmond"], ["Michael", "George", "Michael"], ["Jean-Philippe", "George", "George"]]
        inst = new index.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
