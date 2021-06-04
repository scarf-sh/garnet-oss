import PermissionChecker from '../../services/user/permissionChecker';
import ApiResponseHandler from '../../api/apiResponseHandler';
import AuditLogRepository from '../../database/repositories/auditLogRepository';


export default async (req, res, next) => {
    try {
        
        const payload = await AuditLogRepository.findAndCountAll(
            req.query,
            req,
        );

        await ApiResponseHandler.success(req, res, payload);
    } catch (error) {
        await ApiResponseHandler.error(req, res, error);
    }
};