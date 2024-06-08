// const hed = document.getElementById('hed')
// hed.innerHTML = "hwllo react"

// const hed = document.createElement('h1')
// hed.innerHTML = "hello world iam manthan R harale"

// const root = document.getElementById('root')
// root.appendChild(hed)


// thsi parnathises is use to geive the atrubut to our tag,like
// const heding = React.createElement('h1', {id:"hed"}, "react frist code")
//     const root = ReactDOM.createRoot(document.getElementById("root"))
//     root.render(heding)

const div = React.createElement(
    "div", {id: "parent"}, 
    React.createElement(
        "div", {id: "child"},
        [React.createElement("h1", {id: "hed"}, 'my heding' ), 
        React.createElement("h1", {id: "hed2"}, 'my heding2' )]),

        React.createElement(
            "div", {id: "child2"},
            [React.createElement("h1", {id: "ched"}, 'my child 1' ), 
            React.createElement("h1", {id: "ched2"}, 'my child 2' )])
    )

        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(div)