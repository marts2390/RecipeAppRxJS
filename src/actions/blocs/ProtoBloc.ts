import { BehaviorSubject } from 'rxjs'

export class ProtoBloc<BlocDataModel> {
  protected state: BlocDataModel

  readonly defaultState: BlocDataModel

  readonly subject: BehaviorSubject<BlocDataModel>

  constructor(BlocDataModel: BlocDataModel) {
    this.state = BlocDataModel
    this.defaultState = BlocDataModel
    this.subject = new BehaviorSubject(BlocDataModel)
  }

  // the get function to return the subject. It allows the component to subscribe as Observer.
  getSubject = () => this.subject

  getCurrentState = () => ({ ...this.state })

  getDefaultState = () => this.defaultState

  protected pushState = (newState: BlocDataModel) => {
    this.state = newState
    this.subject.next(this.state)
  }

  // the error function with deal with sending an error through the subject
  protected error = (error: Error) => {
    this.subject.error(error)
  }
}
