import "./MoviesPage.css";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Row from "./Components/Row";
import More from "./Components/More";
import Footer from "./Components/Footer";

import requests from "./requests";
import { useState } from "react";
function MoviesPage() {
  const [lang, setLang] = useState("en");
  const changeLang = (newLang) => {
    setLang(newLang);
  };
  return (
    <div className="Movies">
      <Header />
      <Intro />

      <Row
        title="Popular on netflix"
        fetchURL={`${requests.Romance}${lang}`}
        lang={lang}
      />
      <Row
        title="Family Features"
        fetchURL={`${requests.Family}${lang}`}
        lang={lang}
      />
      <Row title="Action" fetchURL={`${requests.Action}${lang}`} lang={lang} />
      <Row
        title="New releases"
        fetchURL={`${requests.Animation}${lang}`}
        lang={lang}
      />
      <Row
        title="Violent Films"
        fetchURL={`${requests.Thriller}${lang}`}
        lang={lang}
      />
      <Row
        title="Comedy Films"
        fetchURL={`${requests.Comedy}${lang}`}
        lang={lang}
      />
      <Row
        title="Suspense Films"
        fetchURL={`${requests.Mystery}${lang}`}
        lang={lang}
      />
      <Row
        title="Action & Adventure Films"
        fetchURL={`${requests.Thriller}${lang}`}
        lang={lang}
      />
      <Row
        title="Hollywood Films"
        fetchURL={`${requests.Western}${lang}`}
        lang={lang}
      />
      <Row
        title="Arabic Language Films"
        fetchURL={`${requests.Documentary}${lang}`}
        lang={lang}
      />
      <Row
        title="Horror Films"
        fetchURL={`${requests.Horror}${lang}`}
        lang={lang}
      />
      <Row
        title="Family Comedies"
        fetchURL={`${requests.TVMovie}${lang}`}
        lang={lang}
      />
      <Row
        title="Drama Films"
        fetchURL={`${requests.Drama}${lang}`}
        lang={lang}
      />
      <Row title="Arabic" fetchURL={`${requests.History}${lang}`} lang={lang} />
      <Row
        title="Hollywood Films"
        fetchURL={`${requests.Fantasy}${lang}`}
        lang={lang}
        blurred="1"
      />
      <Row
        title="Emotional Films"
        fetchURL={`${requests.Crime}${lang}`}
        lang={lang}
        blurred="2"
      />
      <More />
      <Footer lang={lang} setLang={changeLang} />
    </div>
  );
}

export default MoviesPage;
