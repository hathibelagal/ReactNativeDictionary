var React = require('react-native');
var english_german = require('./english_german.json');

var styles = React.StyleSheet.create({

	// For the container View
    parent: {
        padding: 16
    },

	// For the Text label
    germanLabel: {
        marginTop: 20,
        fontWeight: 'bold'
    },

	// For the Text meaning
    germanWord: {
        marginTop: 15,
        fontSize: 30,
        fontStyle: 'italic'
    }
});

var Dictionary = React.createClass({

  getInitialState: function() {
    return {
        input: '',
        output: ''
    };
  },

  render: function() {
    var layout =
        <React.View style = { styles.parent } >

            <React.Text>
                Type something in English:
            </React.Text>

            <React.TextInput
                onChangeText={(e) => this.setState({input: e})}
                text = { this.state.input }
                onSubmitEditing = { this.showMeaning }
            />

            <React.Text style = { styles.germanLabel } >
                Its German equivalent is:
            </React.Text>

            <React.Text style = { styles.germanWord } >
                { this.state.output }
            </React.Text>
          
        </React.View>
    ;
	return layout;
  },

    showMeaning: function() {
        var meaning = this.state.input in english_german ? 
                        english_german[this.state.input] : 
                        "Not Found";

        this.setState({
             output: meaning 
        });
    },
});

React.AppRegistry.registerComponent('Dictionary', () => Dictionary);
