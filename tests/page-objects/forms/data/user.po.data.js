const constants = require('../../../constants');

module.exports = {
  docs: [{
    _id: 'c49385b3594af7025ef097114104ef48',
    reported_date: 1469578114543,
    notes: '',
    contact: {
      _id: constants.USER_CONTACT_ID,
      name: 'Jack',
      date_of_birth: '',
      phone: '+64274444444',
      alternate_phone: '',
      notes: '',
      type: 'person',
      reported_date: 1478469976421,
    },
    name: 'Number three district',
    external_id: '',
    type: 'district_hospital',
  }],
  userContactDoc: {
    _id: constants.USER_CONTACT_ID,
    name: 'Jack',
    date_of_birth: '',
    phone: '+64274444444',
    alternate_phone: '',
    notes: '',
    type: 'person',
    reported_date: 1478469976421,
    parent: {
      _id: 'c49385b3594af7025ef097114104ef48',
      reported_date: 1469578114543,
      notes: '',
      contact: {
        _id: constants.USER_CONTACT_ID,
        name: 'Jack',
        date_of_birth: '',
        phone: '+64274444444',
        alternate_phone: '',
        notes: '',
        type: 'person',
        reported_date: 1478469976421,
      },
      name: 'Number three district',
      external_id: '',
      type: 'district_hospital',
    },
  },
};
