

    class ContactList extends React.Component {     
        constructor(props) {
            super(props);
            this.state = {  studlist: [ ]  }      
        }

        componentDidMount() {
            fetch(`/getstlist`)
                .then(res => res.json())
                .then(json => this.setState({ studlist: json }));
        }s


        render() {
            return( 
              <div class="contacts">
              Fghj Gnm <br />
              Fghj Gnm <br />
              Fghj Gnm <br />
              <br />
              <ul>
           {this.state.studlist.map((stud)=>
            <div key = { stud.id_stud} id={stud.id_stud} >
                <li id={  stud.id_stud } > { stud.fam + ' ' + stud.name}</li>
           </div>
           )}
           </ul>

              </div>
            )
        }

    }


    class MessageBox extends React.Component {
        render() {
            return( 
              <div class="smsList">
              HI Gnm <br />
              Hi nm Gnm <br />
              HI Gnm <br />
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
             