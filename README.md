1. e.target.[name of the input field].value
2. use form action and formData in the action handler. formData.get("name of the input field')
3. controlled component. one per each field. use state on change of the field. useful to dynamically hadle error.
   3.1: handle all controlled filed on one state object:
   const [formData, setFormData] = useState({
   name:"",
   password: "",
   pahone: ""
   })

4. uncontrolled using useRef
5. Hook form
