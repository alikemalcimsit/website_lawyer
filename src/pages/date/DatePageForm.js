import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { getBlogs, getDates, postDate, postTime } from "../../firebase/firebaseFunctions";
import DateCard from "../../components/datecard/DateCard";
import ClockCard from "../../components/datecard/ClockCard";
import { getNextSixDays } from "../../utils/CustomFunctions";
import { useDispatch, useSelector } from "react-redux";

export default function DatePageForm() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    // getBlogs fonksiyonundan verileri çekip Redux store'a kaydediyoruz.
   
    dispatch(getDates());

  }, []);

  // blogs dizisini useSelector ile alıyoruz. Başlangıçta boş bir dizi olarak tanımlıyoruz.
const times=["13:00", "15:00" , "17:00" , "19:00", "21:00"]

  const handleSubmit = async (e) => {
 e.preventDefault()
    const timestamp = Date()
    
    const date = {
      name: name,
      phone: phone,
      text: text,
      checked: checked,
      selecteddate: selectedDate,
      timestamp: timestamp,
      time:[times[selectedIndex2]]

    };
    try {
      await postDate(date);
  
   window.location.reload()
     
    } catch (error) {
      alert("randevu alınamadı", error)
    }
    
      

  };




  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedIndex2, setSelectedIndex2] = useState(null);
  const [dates, setDates] = useState(getNextSixDays());//kartlara gün kartlarına sıradaki güncleri veren fonksiyon sistem tarihine göre

  return (
    <div>
      <div>
        <div className="grid grid-cols-3 w-10/12 gap-8 m-auto">
          {dates.map((date, index) => (
            <DateCard
         
            
              setSelectedDate={setSelectedDate}
              key={index}
              day={date}
              index={index}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          ))}
        </div>
        <div className="grid grid-cols-5 justify-items-center mt-10 lg:mt-20 w-10/12 gap-8 m-auto">
       {times.map((time,index)=>(
        <ClockCard

        key={index}
        selectedDate={selectedDate}
        text={time}
        index={index}
        selectedIndex={selectedIndex2}
        setSelectedIndex={setSelectedIndex2}
        >
          
        </ClockCard>
       ))}
        </div>
      </div>

      <div className="w-10/12 m-auto">
        <form onSubmit={handleSubmit}>
          <div className="lg:flex items-center justify-evenly mt-10 lg:mt-20">
            <input
              onChange={(e) => setName(e.target.value)}
              placeholder="İsminizi Giriniz"
              type="text"
              className=" border-[#567483] px-7 lg:mb-0 mb-6 text-lg border-2 py-5 rounded-2xl w-full lg:w-5/12 "
            ></input>
            <div className="w-full lg:w-5/12">
              <PhoneInput
                inputStyle={{
                  width: "100%",
                  paddingTop: "35px",
                  paddingBottom: "35px",
                  borderRadius: "16px",
                  fontSize: "18px",
                }}
                country={"tr"}
                value={phone}
                onChange={setPhone}
              />
            </div>
          </div>
          <div className="flex items-center  justify-center mt-10 lg:mt-20">
            <textarea
              onChange={(e) => setText(e.target.value)}
              className="w-full p-10 text-xl border-2 border-[#567483]   "
              style={{ height: "300px" }}
            ></textarea>
          </div>
          <div className="flex w-full lg:w-10/12 m-auto items-center gap-x-10 mt-10 lg:mt-20 ">
            <input
            onChange={(e) => setChecked(e.target.checked)}
              type="checkbox"
             
              checked={checked}
            
              style={{ height: "70px", width: "70px" }}
            ></input>
            <p className="text-xs lg:text-lg">
              Gizlilik, ayrı bir sayfada, kişisel verilerinizin tarafımızca
              işlenmesinin esaslarını düzenlemek üzere mevcuttur. SİTE'yi
              kullandığınız takdirde, bu verilerin işlenmesinin gizlilik
              politikasına uygun olarak gerçekleştiğini kabul edersiniz.
            </p>
          </div>

          <motion.button
            onClick={handleSubmit}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-[#1B242D]  rounded-full justify-center m-auto hover:brightness-150   lg:w-4/12 flex items-center py-4 px-12 text-white font-bold text-xl mt-16"
          >
            Randevu Al
          </motion.button>
        </form>
      </div>
    </div>
  );
}