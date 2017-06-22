/**
 * Created by frosales on 22/06/2017.
 */

var list = null

exports.index = function(req, res) {
    
    list = [
        {'key': 'value-01'},
        {'key': 'value-02'}
    ]

    return list

};