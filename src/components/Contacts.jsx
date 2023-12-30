import { Email, GetApp, Phone } from "@mui/icons-material";
import React from "react";
import resumePDF from "../Frontend_CV_Ilona.pdf";
import { Button } from "@mui/material";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";

const Contacts = () => {
    return (
        <div className="contacts-block" id="contacts">
            <div className="title" style={{ margin: "2rem 1rem 2rem 1rem" }}>
                <h3>Contacts</h3>
            </div>
            <div className="body block accent">
                <div className="flex ac" style={{ gap: "1rem",  justifyContent: "space-around" }}>
                    <p style={{width: "40%"}}>
                        Feel free to reach out to me for collaboration,
                        opportunities, or just to say hello—I'm always open to
                        connecting!
                    </p>
                    <div className="flex" style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "1rem",
                            }}>
                        <div
                            
                        >
                            <Phone style={{ marginRight: "0.5rem", fontSize: "16px" }} />
                            <a href="tel:0534762486">0(534)-762-486</a>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Email style={{ marginRight: "0.5rem" , fontSize: "16px"}} />
                            <a href="mailto:ilona.skars@gmail.com">ilona.skars@gmail.com</a>
                        </div>
                        <div>
                            <a
                                href={resumePDF}
                                download="Ilona_Skargovskaia_Resume.pdf"
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={<GetApp />}
                                >
                                    Download CV
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
