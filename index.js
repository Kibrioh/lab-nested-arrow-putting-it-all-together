


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

function createLoginTracker(userInfo){
  const {userName, password} = userInfo;
  let attemptCount = 0;
  return (passwordAttempt) => {
    attemptCount += 1;
    if (passwordAttempt === password && attemptCount < 3){
      return "Login successful"
    } else if (passwordAttempt !== password && attemptCount <= 3){
        return `Attempt ${attemptCount}: Login failed`
    } else{
        return "Account locked due to too many failed login attempts"
    }
  }

}