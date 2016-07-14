define([
    'moment',
], function(moment) {

    var constructor = Model.extend({

        transformMessage: function(message) {
            var created = moment.unix(message.created_on);
            message.timestamp = created.format('LLL');
            return message;
        }
    });
});