const jwt = require("jsonwebtoken");
const zod = require("zod");

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function check(username,password){
  const userPass = emailSchema.safeParse(username);
  const passPass = passwordSchema.safeParse(password);
  if(!userPass.success || !passPass.success){
    return null;
  }
  else{
    let ret = jwt.sign(username,"pass");
    return ret;
  }
}
function decodedJWT(token){
  const decoded = jwt.decode(token);
  if(decoded)
    return true;
  return false;
}
function verifyJWT(token){
  try{
    const decoded = jwt.verify(token,"pass");
    return true;
  }catch(e){
    
  }
  return false;
}

const accountDetail = {
  name : "harsh@gmail.com",
  passwod: "123456"
}

const ans = check(accountDetail.name,accountDetail.passwod);  
console.log(ans);
const ans2 = decodedJWT("notAns");
console.log(ans2);
const ans3 = verifyJWT(ans);
console.log(ans3);