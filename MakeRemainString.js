function makeRemainString(props) {
  const distance = new Date().getTime() - props.date.getTime();
  console.log(new Date(), props.date, distance / (1000 * 60 * 60 * 24));
  const day = Math.floor(distance / (1000 * 60 * 60 * 24));

  //   const hour = Math.floor(
  //     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //   );

  if (day < 0) {
    return "D" + day;
  } else if (day > 0) {
    return "D" + day;
  } else if (day === 0) {
    return "D-day";
  }
}

export default makeRemainString;
