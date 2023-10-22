let points = [81, 54, 62, 32, 84, 51, 78, 41, 55,
              26, 35, 32, 59, 56, 51, 57, 66, 69];

points = points.sort((x, y) => y - x);

points.forEach((element) => console.log(element));
