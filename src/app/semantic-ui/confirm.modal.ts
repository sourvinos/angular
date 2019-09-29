import { ComponentModalConfig, ModalSize } from 'ng2-semantic-ui';
import { IConfirmModalContext } from './confirm-modal-context';
import { ConfirmModalComponent } from './modal-confirm.component';

export class ConfirmModal extends ComponentModalConfig<IConfirmModalContext, void, void> {
    constructor(title: string, question: string, size = ModalSize.Small) {
        super(ConfirmModalComponent, { title, question });
        this.isClosable = false;
        this.transitionDuration = 200;
        this.size = size;
    }
}