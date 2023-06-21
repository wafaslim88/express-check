const validateTime = (req, res, next) => {
    //These variables store the current day of the week and the current hour of the day, respectively.
    const currentDay = new Date().getDay(); // 0 for Sunday, 1 for Monday, and so on
    const currentHour = new Date().getHours();
    //JavaScript Date methods used to retrieve the current day of the week and the current hour of the day
  
    if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 17) {
      next(); // Continue to the next middleware or route handler
    } else {
      res.send('Sorry, the website is only available during working hours.');
    }
  };
  
  module.exports = validateTime;




  