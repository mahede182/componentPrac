import { Button } from "native-base";
const ButtonPrac =()=>{

return <Box alignItems="center">
      <Button onPress={() => console.log("hello world")}>Click Me</Button>
    </Box>;
}
export default ButtonPrac;