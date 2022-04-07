import ApiService from "../../services/api.service";
import React, { useEffect, useState } from "react";
import { adminfooter } from "../../api";
const Footer = () => {
  const [footerData, setFooter] = useState([]);

  async function getcontent() {
    try {
      const footer = await ApiService.get(adminfooter.GET);

      console.log(footer.data);
      setFooter(footer.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getcontent();
  }, []);

  return (
    <>
      {footerData?.results?.map((data, i) => {
        return (
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <span className="site-copyright-text">
                  <center>
                    {" "}
                    {data.copyright_text} |{" "}
                    <a href="https://psyber.co">
                      Cooked with{" "}
                      <img
                        draggable="false"
                        className="emoji"
                        width="10px"
                        alt="❤️"
                        src="https://s.w.org/images/core/emoji/13.1.0/svg/2764.svg"
                      />{" "}
                      by Psyber Inc
                    </a>
                  </center>{" "}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Footer;
