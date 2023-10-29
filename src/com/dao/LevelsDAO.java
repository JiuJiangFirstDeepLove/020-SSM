package com.dao;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import com.entity.Levels;

@Repository("levelsDAO") // Repository标签定义数据库连接的访问 Spring中直接
@Mapper
public interface LevelsDAO {

	/**
* LevelsDAO 接口 可以按名称直接调用levels.xml配置文件的SQL语句
 */

	// 插入数据 调用entity包levels.xml里的insertLevels配置 返回值0(失败),1(成功)
	public int insertLevels(Levels levels);

	// 更新数据 调用entity包levels.xml里的updateLevels配置 返回值0(失败),1(成功)
	public int updateLevels(Levels levels);

	// 删除数据 调用entity包levels.xml里的deleteLevels配置 返回值0(失败),1(成功)
	public int deleteLevels(String levelsid);

	// 查询全部数据 调用entity包levels.xml里的getAllLevels配置 返回List类型的数据
	public List<Levels> getAllLevels();

	// 按照Levels类里面的值精确查询 调用entity包levels.xml里的getLevelsByCond配置 返回List类型的数据
	public List<Levels> getLevelsByCond(Levels levels);

	// 按照Levels类里面的值模糊查询 调用entity包levels.xml里的getLevelsByLike配置 返回List类型的数据
	public List<Levels> getLevelsByLike(Levels levels);

	// 按主键查询表返回单一的Levels实例 调用entity包levels.xml里的getLevelsById配置
	public Levels getLevelsById(String levelsid);

}


