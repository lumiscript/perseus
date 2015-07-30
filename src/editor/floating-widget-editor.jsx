var SectionControlButton = require("../components/section-control-button.jsx");

var FloatingWidgetEditor = React.createClass({
    propTypes: {
        editorOnChange: React.PropTypes.func.isRequired,
    },

    render: function () {
        return <div>
            <SectionControlButton
                icon="icon-edit"
                onClick={() => console.log("Edit!")} />
            <SectionControlButton
                icon="icon-trash"
                onClick={() => console.log("Trash!")} />
        </div>;
    },
});

module.exports = FloatingWidgetEditor;
