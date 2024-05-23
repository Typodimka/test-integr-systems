import React, {useState} from 'react';
import imgBlue from './assets/img/photo_blue.jpg';
import bottomIMG from './assets/img/bottomIMG.png';

import {data} from "./data";
import {Grid} from "@mui/material";
import "./assets/App.css"


function App() {

    const [value, setValue] = useState("")

    const [displays, setDisplays] = useState<string[]>([])


    const clickHandler = () => {
        const copyDisplays: string[] = []

        // Находим ключи объекта, содержащие подстроку value
        const find = Object.keys(data).filter(key => key.includes(value));


        // Если найдены ключи, выбираем первый
        if (find.length > 0) {
            find.forEach((item, i) => {
                const search = data[item];
                copyDisplays.push(`${find[i]}:  ${search}`)
            })

            setDisplays(copyDisplays)


        } else {
            // Обработка случая, когда не найдено ни одного соответствия
            // Например, можно установить пустую строку в setDisplay
            setDisplays([]);
        }
    }
    const list = ["Атрибут версии поддерживаемого стандарта ХМІ.", "Атрибут кодировки символов, в которой написан документ.",
        "Атрибут автономности standalone.", "Объявление типа документа DTD."]


    return (
        <>

            <div style={{height: "100vh"}}>
                <div className="header">
                    <div className="header-logo">
                        <p>SunRav WEB Class</p>
                    </div>

                </div>

                <div style={{paddingLeft: 20}}>
                    <h2 style={{fontWeight: 600, height: 20}}>Вопрос 7</h2>
                    <p style={{fontSize: 18}}>ХМL-декларация включает в себя:</p>

                    <div style={{marginTop: 20}}>
                        <h2 style={{fontWeight: 600, height: 20}}>Ответы</h2>

                        {list.map((item, i) => (
                            <div style={{marginTop: 0, height: 52}}>
                                <hr/>
                                <label style={{fontSize: 16}}>{i + 1}.</label>

                                <input type="radio" value="email"/>
                                <label style={{fontSize: 18, paddingLeft: 30}}>{item}</label>
                            </div>
                        ))}


                        <div style={{display: "flex", justifyContent: "flex-end", marginRight: 20}}>
                            <button style={{color: "white", backgroundColor: "#0044CC", border: 'none', height: 28}}>
                                Ответить
                            </button>
                            <button style={{backgroundColor: "#FAFAFA", height: 28, border: '1px solid', marginLeft: 5}}>
                                Пропустить
                            </button>
                        </div>

                    </div>

                </div>


                <div style={{width: "100%", height: "100%", paddingLeft: 20, marginTop: 20}}>
                    <img src={imgBlue} alt="" />

                    <div style={{textAlign: "center", marginTop: 20}}>
                        <hr/>

                        <img src={bottomIMG} alt="" />

                    </div>


                </div>


                <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    display: "flex",
                    alignItems: "center"
                }}>
                    <input type="text" style={{height: 30, marginTop: 2, borderColor: "#ffffff", width: 500}} value={value}
                           onInput={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                    />
                    <button style={{
                        color: "white",
                        border: "none",
                        backgroundColor: "#efefef",
                        padding: 8,
                        borderRadius: 3,
                        marginLeft: 10,
                        cursor: "pointer",
                        height: 35
                    }} type="submit" onClick={clickHandler}>
                        Ответить
                    </button>

                    <button style={{
                        color: "white",
                        border: "none",
                        backgroundColor: "#efefef",
                        padding: 8,
                        borderRadius: 3,
                        marginLeft: 10,
                        cursor: "pointer",
                        height: 35
                    }} type="submit" onClick={() => setDisplays([])}>
                        X
                    </button>

                </div>




            </div>
            <Grid container spacing={2} sx={{p: 2}}>

                {displays.map((item, i) => (
                    <Grid item xs={6}>
                        <p style={{color: "#a1a1a1"}} key={i}>{i + 1}){item}</p>
                    </Grid>

                ))}

            </Grid>
        </>

    );
}

export default App;
