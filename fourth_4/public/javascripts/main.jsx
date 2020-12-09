

    class ContactList extends React.Component {     
        constructor(props) {
            super(props);
            this.state = {  studlist: []  };
            
            this.getfio = this.getfio.bind(this);
            this.handleChange = this.handleChange.bind(this);
        }

            componentDidMount() {
            fetch(`./getstlist`)
              .then(res => res.json())
              .then(json => this.setState({ studlist: json }));
            }
          
        getfio() {
            alert("ФИО" + e.target.value);

        }

        handleChange(event) {
            this.setState({chtext: event.target.value});
        }


        render() {
            return( 
              <div class="contacts"> <br />
           {this.state.studlist.map((stud)=>
            <div key = { stud.id_stud} id={stud.id_stud} >
                <p id={  stud.id_stud } value={stud.fam} onClick= {this.getfio}> { stud.fam + ' ' + stud.name}</p>
           </div>
           )}
              {this.state.chtext}<br />
              <form>
                  <input onChange={this.nandleChange}></input>
              </form>
              </div>
            )
        }

    }


    class MessageBox extends React.Component {

        constructor(props) {
            super(props);
            this.state = {student : 'ghbg gh' };
            this.handlePrivet = this.handlePrivet.bind(this);     
        }

       handlePrivet() {
           alert('fg fg');
           this.setState({student: 'cn vbn'});
       }

        render() {
            return( 
              <div class="smsList">
              HI Gnm <br />
              Hi nm Gnm <br />
              HI Gnm <br />
              {this.state.student}<br />
              <button onClick={this.handlePrivet}>Change</button>
              </div>
            )
        }

    }

    ReactDOM.render (
        <div className="mainbox">
        <ContactList />
        <MessageBox /> 
        </div> ,

        document.getElementById("root")

    )
             