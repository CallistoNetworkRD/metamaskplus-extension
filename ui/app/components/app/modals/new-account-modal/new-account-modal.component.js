import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../../../ui/button/button.component'

export default class NewAccountModal extends Component {

  static contextTypes = {
    t: PropTypes.func,
  }

  static propTypes = {
    hideModal: PropTypes.func.isRequired,
    newAccountNumber: PropTypes.number.isRequired,
  }

  state = {
    alias: '',
  }

  onChange = e => {
    this.setState({
      alias: e.target.value,
    })
  }

  onKeyPress = e => {
    if (e.key === 'Enter' && this.state.alias) {
      this.props.onSave()
    }
  }

  render () {
    const { t } = this.context

    return (
      <div className="new-account-modal">
        <div className="new-account-modal__content">
          <div className="new-account-modal__content__header">
            {t('newAccount')}
          </div>
          <div className="new-account-modal__input-label">
            {t('accountName')}
          </div>
          <input
            type="text"
            className="new-account-modal__input"
            placeholder={t('addToAddressBookModalPlaceholder')}
            onChange={this.onChange}
            onKeyPress={this.onKeyPress}
            value={this.state.alias}
            placeholder={ t('account', [this.props.newAccountNumber]) }
            autoFocus
          />
        </div>
        <div className="new-account-modal__footer">
          <Button
            type="secondary"
            onClick={this.props.hideModal}
          >
            {t('cancel')}
          </Button>
          <Button
            type="primary"
            onClick={() => {
              this.props.onSave()
              this.props.hideModal()
            }}
            disabled={!this.state.alias}
          >
            {t('save')}
          </Button>
        </div>
      </div>
    )
  }
}