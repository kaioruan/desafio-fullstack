import { Request, Response } from 'express';
import AdminService from '../services/AdminService';

// const ERROR_500 = 'Internal Server Error';

class AdminController {
  constructor(private adminService = new AdminService()) {}

  public getAllClients = async (req: Request, res: Response): Promise<Response> => {
    const result = await this.adminService.getAllClients();
    if (result.length === 0) {
      return res.status(404).json({ message: 'No clients found' });
    }
    return res.status(200).json(result);
  };

  public createClient = async (req: Request, res: Response): Promise<Response> => {
    const result = await this.adminService.createClient(req.body);
    return res.status(201).json(result);
  };

  public deleteClient = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    await this.adminService.deleteClient(id);
    return res.status(200).send();
  };

  public updateClient = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const result = await this.adminService.updateClient(id, req.body);
    return res.status(200).json(result);
  };
}

export default AdminController;
