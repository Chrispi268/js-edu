/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = ['family', 'friends', 'normal_life', 'profession',
            'carrier', 'top_perfomance'], 
    knowsProgramming = true,
    config = {family: 4, friends: 10, normal_life: 20, profession: 30,
              carrier: 40, top_perfomance: 60}
    ) {
      let hours = {
        true: 800, 
      }
    return (hours[knowsProgramming] / config[focus]);
    {
  };}
