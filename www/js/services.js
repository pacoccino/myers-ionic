angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})
.factory('questionary', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var questions = [{
    id: 0,
    type: 'type1',
    question: 'Are you mad?',
    responses: {
      i: -1,
      n: 0,
      t: +1,
      p: 0,
    }
  },
    {
    id: 1,
    type: 'type2',
    question: 'Are you smart?',
    responses: {
      i: 1,
      n: 0,
      t: 0,
      p: 1,
    }
  },
    {
    id: 2,
    type: 'type3',
    question: 'Are you ugly?',
    responses: {
      i: -1,
      n: 0,
      t: 0,
      p: 1,
    }
  },
    {
    id: 3,
    type: 'type4',
    question: 'Are you sad?',
    responses: {
      i: -1,
      n: 0,
      t: +1,
      p: 0,
    }
  }];

  return {
    questions: function() {
      return questions;
    }
  };
});
