'use strict'
const store = require('../store')

const onSuccess = message => {
  $('#message').removeClass('failure')
  $('#message').addClass('success')
  $('#message').text(message)
  // can remove the the word 'message' and just connect the 3 dot commands in one line,
  // or chaining.
  $('form').trigger('reset')
}

const onFailure = message => {
  $('#message').removeClass('success')
  $('#message').addClass('failure')
  $('#message').text(message)
  $('form').trigger('reset')
}

const onSignupSuccess = () => {
  onSuccess('You successfully sign up! Now, sign in')
}
const onSignupFailure = () => {
  onFailure('Rut roh... somgthing went wrong! try again')
}

const onSigninSuccess = responseData => {
  store.user = responseData.user
  onSuccess('You successfully sign in!')
  $('.after-auth').show()
  $('.before-auth').hide()
  $('#gameMessage').text('')
  $('#gameMessage').show()
}
const onSigninFailure = () => {
  onFailure('Rut roh... somgthing went wrong! try again')
}
const onChangePasswordSuccess = responseData => {
  // store.user = responseData.user
  onSuccess('You successfully changed password!')
}
const onChangePasswordFailure = () => {
  onFailure('Change Password did not work')
}
// onSuccess('Operation success')

const onSignoutSuccess = responseData => {
  store.user = {} // the store no longer know who we are.
  onSuccess('You successfully signed out!')
  $('.after-auth').hide()
  $('.before-auth').show()
  $('.container').hide()
  $('#gameMessage').hide()
}
const onSignoutFailure = () => {
  onFailure('Sign out failed')
}

module.exports = {
  onSignupSuccess,
  onSignupFailure,
  onSigninSuccess,
  onSigninFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignoutSuccess,
  onSignoutFailure
}
