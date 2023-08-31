export const getNextSixDays = () => {
    const currentDate = new Date();
    const dates = [];
    for (let i = 1; i < 7; i++) {
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + i);
      const day = nextDate.getDate();
      const month = nextDate.toLocaleString("default", { month: "long" });
      const formattedDate = `${day} ${month}`;
      dates.push(formattedDate);
    }
    return dates;
  };


  