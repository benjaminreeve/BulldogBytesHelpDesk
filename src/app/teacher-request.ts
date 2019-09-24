export class TeacherRequest {

  constructor (
    public name: string,
    public type: string,
    public request: string,
    public details?: string,
    public freePerid?: string
  ) {}

}

