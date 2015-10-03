var React = require('react-native');
var german_english = require('./german_english.json');

var styles = React.StyleSheet.create({

	// For the container View
    parent: {
        padding: 16
    },

	// For the Text label
    englishLabel: {
        marginTop: 20,
        fontWeight: 'bold'
    },

	// For the Text meaning
    englishWord: {
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
                Type in a German word here:
            </React.Text>

            <React.TextInput
                onChangeText={(e) => this.setState({input: e})}
                text = { this.state.input }
                onSubmitEditing = { this.showMeaning }
            />

            <React.Text style = { styles.englishLabel } >
                Its meaning in English is:
            </React.Text>

            <React.Text style = { styles.englishWord } >
                { this.state.output }
            </React.Text>
          
        </React.View>
    ;
	return layout;
  },

    showMeaning: function() {
        var meaning = this.state.input in german_english ? 
                        german_english[this.state.input] : 
                        "Not Found";

        this.setState({
             output: meaning 
        });
    },
});

React.AppRegistry.registerComponent('Dictionary', () => Dictionary);
