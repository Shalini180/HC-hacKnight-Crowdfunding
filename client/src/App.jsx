this.state = {
  foo: "bar",
  resumeData: {}
};

ReactGA.initialize("UA-110570651-1");
ReactGA.pageview(window.location.pathname);
  }

getResumeData() {
  $.ajax({
    url: "./resumeData.json",
    dataType: "json",
    cache: false,
    success: function (data) {
      this.setState({ resumeData: data });
    }.bind(this),
    error: function (xhr, status, err) {
      console.log(err);
      alert(err);
    }
  });
}

componentDidMount() {
  this.getResumeData();
}

this.state = {
  foo: "bar",
  resumeData: {}
};

ReactGA.initialize("UA-110570651-1");
ReactGA.pageview(window.location.pathname);
  }

getResumeData() {
  $.ajax({
    url: "./resumeData.json",
    dataType: "json",
    cache: false,
    success: function (data) {
      this.setState({ resumeData: data });
    }.bind(this),
    error: function (xhr, status, err) {
      console.log(err);
      alert(err);
    }
  });
}

componentDidMount() {
  this.getResumeData();
}

render() {

  return (
    <BrowserRouter>
      <main className="min-h-screen bg-slate-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/createfund" element={<CreateFund />}></Route>
          <Route path="/displayfunds" element={<Display />}></Route>
          <Route path="/donate" element={<Donate />}></Route>
          <Route path="/reactcards" element={<Reactcards />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/crustcreate" element={<Crustcreate />}></Route>
          <Route path="/Authenticate" element={<Authenticate />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

}
export default App;